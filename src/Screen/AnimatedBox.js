import { motify } from 'moti';
import { View } from 'react-native';

// Wrap View with motify
const MotiView = motify(View)();

export default function AnimatedBox() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
      style={{ width: 100, height: 100, backgroundColor: 'tomato' }}
    />
  );
}
