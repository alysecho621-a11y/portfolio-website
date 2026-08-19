'use client';

import { useCallback, useState } from 'react';

export function useProjectCursor() {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [label, setLabel] = useState('View Project →');

  const handlersFor = useCallback(
    (cursorLabel: string) => ({
      onMouseEnter: () => {
        setLabel(cursorLabel);
        setVisible(true);
      },
      onMouseLeave: () => setVisible(false),
      onMouseMove: (e: React.MouseEvent) => {
        setX(e.clientX);
        setY(e.clientY);
      },
    }),
    []
  );

  return { visible, x, y, label, handlersFor };
}
