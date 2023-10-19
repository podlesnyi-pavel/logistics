import { defineComponent } from 'vue';
import { ETypeButton } from '@/components/global/app-button/enums/type-button-enum';
import goodsTable from '@/components/goods-table/goods-table.vue';

export default defineComponent({
  components: {
    goodsTable,
  },
  data() {
    return {
      ETypeButton: ETypeButton,
      headersTable: [
        {
          id: 1,
          value: '',
          title: '№',
          isShow: true,
        },
        {
          id: 2,
          value: '',
          title: 'Настройки',
          isShow: true,
        },
        {
          id: 3,
          value: 'Наименование еденицы',
          title: 'Наименование еденицы',
          isShow: true,
        },
        {
          id: 4,
          value: 'Цена',
          title: 'Цена',
          isShow: true,
        },
        {
          id: 5,
          value: 'Кол-во',
          title: 'Кол-во',
          isShow: true,
        },
        {
          id: 6,
          value: 'Название товара',
          title: 'Название товара',
          isShow: true,
        },
        {
          id: 7,
          value: 'Итого',
          title: 'Итого',
          isShow: true,
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
  computed: {
    visibleHeaders() {
      return this.headersTable.filter((header) => header.isShow);
    },
    visibleRows() {
      return this.rowsTable.map((row) => {
        return {
          ...row,
          columns: row.columns.filter((column) => column.isShow),
        };
      });
    },
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
    swapItems(array: any, startIndex: number, endIndex: number) {
      const startItem = array[startIndex];

      array.splice(startIndex, 1);
      array.splice(endIndex, 0, startItem);
    },
    swapRows(startIndex: number, endIndex: number): void {
      this.swapItems(this.rowsTable, startIndex, endIndex);
    },
    swapHeaders(startIndex: number, endIndex: number): void {
      this.swapItems(this.headersTable, startIndex, endIndex);

      this.rowsTable.forEach((row) => {
        this.swapItems(row.columns, startIndex, endIndex);
      });
    },
    changeVisibleColumns(index: number) {
      this.headersTable[index].isShow = !this.headersTable[index].isShow;

      this.rowsTable.forEach((row) => {
        row.columns[index].isShow = !row.columns[index].isShow;
      });
    },
  },
});
