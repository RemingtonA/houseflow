import AnimatedLogo from '../AnimatedLogo';

export default function AnimatedLogoExample() {
  return <AnimatedLogo onComplete={() => console.log('Animation complete')} />;
}
