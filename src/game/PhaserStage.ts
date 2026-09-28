import Phaser from 'phaser';

interface CardVisual {
  id: string;
  title: string;
  accent: string;
}

const colors: Record<string, number> = {
  cyan: 0x62e6ff,
  yellow: 0xf6ee5c,
  coral: 0xff6f61,
  violet: 0xb895ff,
  lime: 0xabff7c,
  blue: 0x789cff,
};

class StudioScene extends Phaser.Scene {
  private cards = new Map<string, Phaser.GameObjects.Container>();
  private status?: Phaser.GameObjects.Text;

  constructor(private available: CardVisual[]) {
    super('studio');
  }

  create() {
    this.cameras.main.setBackgroundColor('#101018');
    const { width, height } = this.scale;
    const graphics = this.add.graphics();
    graphics.lineStyle(1, 0x393845, 0.55);
    for (let x = 0; x < width; x += 32) graphics.lineBetween(x, 0, x, height);
    for (let y = 0; y < height; y += 32) graphics.lineBetween(0, y, width, y);

    this.add
      .text(22, 18, 'CARD SYSTEM / LIVE STATE', {
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#a7a5b2',
        letterSpacing: 2,
      })
      .setAlpha(0.9);

    this.status = this.add
      .text(width - 22, 18, '0 / 3', {
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#f6ee5c',
      })
      .setOrigin(1, 0);

    this.available.forEach((card, index) => {
      const container = this.makeCard(card, index, width, height);
      this.cards.set(card.id, container);
    });
  }

  private makeCard(card: CardVisual, index: number, width: number, height: number) {
    const x = width / 2 + (index - (this.available.length - 1) / 2) * Math.min(88, width / 7);
    const y = height * 0.6 + Math.abs(index - 2.5) * 4;
    const color = colors[card.accent] ?? colors.cyan;
    const rect = this.add.rectangle(0, 0, 92, 132, 0x181821, 1).setStrokeStyle(1, color, 0.75);
    const line = this.add.rectangle(0, -25, 54, 1, color, 0.8).setRotation(-0.25);
    const node = this.add.rectangle(20, -40, 12, 12, 0xf6ee5c).setRotation(Math.PI / 4);
    const label = this.add
      .text(-35, 36, card.title.toUpperCase(), {
        fontFamily: 'Arial Narrow, sans-serif',
        fontSize: '11px',
        color: '#f4f1ea',
        wordWrap: { width: 70 },
      })
      .setOrigin(0, 0);
    return this.add.container(x, y, [rect, line, node, label]).setRotation((index - 2.5) * 0.045);
  }

  updateSelection(selected: string[], solved: boolean) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.status?.setText(solved ? 'BRIEF SOLVED' : `${selected.length} / 3`);
    this.status?.setColor(solved ? '#abff7c' : '#f6ee5c');
    this.cards.forEach((container, id) => {
      const active = selected.includes(id);
      this.tweens.add({
        targets: container,
        y: active ? this.scale.height * 0.35 : this.scale.height * 0.6,
        scale: active ? 1.12 : 0.92,
        alpha: selected.length > 0 && !active ? 0.42 : 1,
        duration: reducedMotion ? 0 : 260,
        ease: 'Cubic.Out',
      });
    });
    if (solved && !reducedMotion) this.cameras.main.flash(320, 171, 255, 124, false);
  }
}

export function createPhaserStage(container: HTMLElement, cards: CardVisual[]) {
  const scene = new StudioScene(cards);
  let pending: { selected: string[]; solved: boolean } | null = null;
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: container,
    width: container.clientWidth || 720,
    height: 330,
    transparent: false,
    scene,
    render: { antialias: true, pixelArt: false },
    audio: { noAudio: true },
    scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
  });
  game.events.once(Phaser.Core.Events.READY, () => {
    if (pending) scene.updateSelection(pending.selected, pending.solved);
  });
  return {
    update(selected: string[], solved: boolean) {
      if (scene.sys?.isActive()) scene.updateSelection(selected, solved);
      else pending = { selected, solved };
    },
    destroy() {
      game.destroy(true);
    },
  };
}
