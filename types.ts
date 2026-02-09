
// Fix: Import React to resolve React namespace errors in type definitions
import React from 'react';

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  DANGER = 'danger'
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}