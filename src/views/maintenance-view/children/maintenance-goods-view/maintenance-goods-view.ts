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
      const currentLastChildId = this.rowsTable[this.rowsTable.length - 1].id;

      const columns = [...this.rowsTable[0].columns].map((column) => {
        return {
          ...column,
          value: '',
        };
      });

      const newRow = {
        id: currentLastChildId + 1,
        columns: columns,
      };

      this.rowsTable.push(newRow);
    },
    removeRow(index: number): void {
      this.rowsTable.splice(index, 1);
    },
    swapItem(array: any, startIndex: number, endIndex: number) {
      const startItem = array[startIndex];

      array.splice(startIndex, 1);
      array.splice(endIndex, 0, startItem);
    },
    swapRows(startIndex: number, endIndex: number): void {
      this.swapItem(this.rowsTable, startIndex, endIndex);
    },
    swapHeaders(startIndex: number, endIndex: number): void {
      this.swapItem(this.headersTable, startIndex, endIndex);

      this.rowsTable.forEach((row) => {
        this.swapItem(row.columns, startIndex, endIndex);
      });
    },
  },
});
