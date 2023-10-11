const routesNames = {
  maintenance: 'maintenance',
  test: 'test',
};

const routesData = {
  maintenance: {
    path: `/${routesNames.maintenance}`,
    name: 'Проведение ТО и мелкий ремонт',
    children: {
      general: {
        path: `/${routesNames.maintenance}/general`,
        name: 'Общее',
      },
      goods: {
        path: `/${routesNames.maintenance}/goods`,
        name: 'Товары',
      },
      expenses: {
        path: `/${routesNames.maintenance}/expenses`,
        name: 'Доп. расходы',
      },
    },
  },
  test: {
    path: `/${routesNames.test}`,
    name: 'Test page',
  },
};

export default routesData;
