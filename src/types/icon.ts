export const ICON_NAMES = {
    'arrow-down': 'arrow-down',
    'arrow-up': 'arrow-up',
    'chart': 'chart',
    'customers': 'Customers',
    'home': 'home',
    'setting': 'setting',
    'notification': 'notification',
    'sales': 'Sales',
  } as const;
  
  export type IconName = keyof typeof ICON_NAMES;