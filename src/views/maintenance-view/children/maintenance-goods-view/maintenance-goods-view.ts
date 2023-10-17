import { defineComponent } from 'vue';
import { ETypeButton } from '@/components/global/app-button/enums/type-button-enum';
import settingsColumns from '@/components/settings-columns/settings-columns.vue';
import goodsTable from '@/components/goods-table/goods-table.vue';

export default defineComponent({
  components: {
    settingsColumns,
    goodsTable,
  },
  data() {
    return {
      ETypeButton: ETypeButton,
      headersTable: [
        {
          id: 1,
          value: '',
        },
        {
          id: 2,
          value: '',
        },
        {
          id: 3,
          value: 'Наименование еденицы',
        },
        {
          id: 4,
          value: 'Цена',
        },
        {
          id: 5,
          value: 'Кол-во',
        },
        {
          id: 6,
          value: 'Название товара',
        },
        {
          id: 7,
          value: 'Итого',
        },
      ],
      rowsTable: [
        {
          id: 1,
          columns: [
            {
              id: 1,
              value: 1,
              isShow: true,
            },
            {
              id: 2,
              value: '',
              isShow: true,
            },
            {
              id: 3,
              value: 'Мраморный щебень фр. 2-5 мм, 25кг',
              isShow: true,
            },
            {
              id: 4,
              value: 1231,
              isShow: true,
            },
            {
              id: 5,
              value: 12,
              isShow: true,
            },
            {
              id: 6,
              value: 'Мраморный щебень',
              isShow: true,
            },
            {
              id: 7,
              value: 1231,
              isShow: true,
            },
          ],
        },
        {
          id: 2,
          columns: [
            {
              id: 1,
              value: 2,
              isShow: true,
            },
            {
              id: 2,
              value: '',
              isShow: true,
            },
            {
              id: 3,
              value: 'Мраморный щебень фр. 2-5 мм, 25кг',
              isShow: true,
            },
            {
              id: 4,
              value: 1231,
              isShow: true,
            },
            {
              id: 5,
              value: 12,
              isShow: true,
            },
            {
              id: 6,
              value: 'Мраморный щебень',
              isShow: true,
            },
            {
              id: 7,
              value: 1231,
              isShow: true,
            },
          ],
        },
        {
          id: 3,
          columns: [
            {
              id: 1,
              value: 2,
              isShow: true,
            },
            {
              id: 2,
              value: '',
              isShow: true,
            },
            {
              id: 3,
              value: 'Мраморный щебень фр. 2-5 мм, 25кг',
              isShow: true,
            },
            {
              id: 4,
              value: 1231,
              isShow: true,
            },
            {
              id: 5,
              value: 1,
              isShow: true,
            },
            {
              id: 6,
              value: '',
              isShow: true,
            },
            {
              id: 7,
              value: 1231,
              isShow: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    addRow(): void {
      const currentLastChild = this.rowsTable[this.rowsTable.length - 1];
      const columns = [];

      for (let i = 1; i <= 7; i++) {
        columns.push({
          id: i,
          value: '',
          isShow: true,
        });
      }

      const newRow = {
        id: currentLastChild.id + 1,
        columns: columns,
      };

      this.rowsTable.push(newRow);
    },
    removeRow(index: number) {
      this.rowsTable.splice(index, 1);
    },
    swapRows(startIndex: number, endIndex: number) {
      const startItem = this.rowsTable[startIndex];

      this.rowsTable.splice(startIndex, 1);
      this.rowsTable.splice(endIndex, 0, startItem);
    },
  },
});
