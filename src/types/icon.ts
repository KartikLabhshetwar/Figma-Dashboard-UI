export const ICON_NAMES = {
    'arrow-down': 'arrow-down',
    'arrow-up': 'arrow-up',
    'chart': 'chart',
    'Customers': 'Customers',
    'home': 'home',
    'setting': 'setting',
    'notification': 'notification',
    'Sales': 'Sales',
  } as const;
  
  export type IconName = keyof typeof ICON_NAMES;