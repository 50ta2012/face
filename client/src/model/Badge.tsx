import styled from '@emotion/styled';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: 'success' | 'info' | 'warning' | 'danger';
  shape?: 'circle' | 'rounded';
}

const variantColorMap = {
  success: {
    backgroundColor: '#0cb324',
    color: '#fff',
  },
  info: {
    backgroundColor: '#0a8aca',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#e56807',
    color: '#fff',
  },
  danger: {
    backgroundColor: '#fb4343',
    color: '#fff',
  },
};

const StyledBadge = styled.div<BadgeProps>`
  min-width: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '16px')};
  padding: ${({ shape }) => (shape === 'circle' ? '0' : '0 6px')};
  ${({ variant }) => variantColorMap[variant ?? 'info']}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  shape = 'rounded',
  variant = 'info',
  ...rest
}) => {
  return (
    <StyledBadge variant={variant} shape={shape} {...rest}>
      {children}
    </StyledBadge>
  );
};
