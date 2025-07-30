// src/utils.ts
export const getTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString();
  };