import { Actor } from '../../../../../types/search';
import { box, cn_name, cn_photo } from './actor.module.css';

function MiniActor({ name, photo }: Actor) {
  return (
    <section className={box}>
      <span className={cn_name}>{name}</span>
      <img src={photo} alt={`Фотография ${name}`} className={cn_photo} />
    </section>
  );
}

export { MiniActor };
