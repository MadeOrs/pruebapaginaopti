import { useEffect, useState } from 'react';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface PerformanceMetricProps {
  start: number;
  end: number;
  label: string;
  duration?: number;
  suffix?: string;
  type?: 'fps' | 'default';
}

export function PerformanceMetric({ 
  start, 
  end, 
  label, 
  duration = 2000,
  suffix = '',
  type = 'default'
}: PerformanceMetricProps) {
  const [value, setValue] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (!inView) return;
    
    const startTime = Date.now();
    
    const updateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.floor(start + (end - start) * progress);
      setValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  }, [start, end, duration, inView]);

  const getFpsColor = () => {
    if (value <= 60) return 'text-red-500';
    if (value <= 144) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">{label}</span>
        <span className={cn(
          "text-lg font-bold transition-colors duration-300",
          type === 'fps' ? getFpsColor() : 'text-white'
        )}>
          {value}{suffix}
        </span>
      </div>
      <Progress 
        value={(value - start) / (end - start) * 100} 
        className={cn(
          "h-2 transition-all duration-500",
          type === 'fps' 
            ? "bg-blue-950 [&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:via-yellow-500 [&>div]:to-green-500" 
            : "bg-blue-950 [&>div]:bg-blue-500"
        )} 
      />
    </div>
  );
}