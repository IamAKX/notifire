import React, { ChangeEvent } from 'react';
import { Switch as MantineSwitch, SwitchProps } from '@mantine/core';
import useStyles from './Switch.styles';

interface ISwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Switch component
 *
 */
export function Switch({ onChange, ...props }: ISwitchProps) {
  const { classes } = useStyles();
  const defaultDesign = { radius: 'xl', size: 'md', classNames: classes } as SwitchProps;

  return <MantineSwitch onChange={onChange} {...defaultDesign} {...props} />;
}
