const routesData = {
  maintenance: {
    path: '/',
    name: 'Проведение ТО и мелкий ремонт',
    children: {
      general: {
        path: '/general',
        name: 'Общее',
      },
      goods: {
        path: '/goods',
        name: 'Товары',
      },
      expenses: {
        path: '/expenses',
        name: 'Доп. расходы',
      },
    },
  },
  test: {
    path: '/test',
    name: 'Test page',
  },
};

export default routesData;
