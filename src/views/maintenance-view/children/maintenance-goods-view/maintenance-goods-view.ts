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
      dataTable: [
        {
          id: 1,
          isShow: true,
          title: 1,
          nameOne: 'Мраморный щебень фр. 2-5 мм, 25кг',
          price: 1231,
          quantity: 12,
          name: 'Мраморный щебень',
          total: 1231,
        },
        {
          id: 2,
          isShow: true,
          title: 2,
          nameOne: 'Мраморный щебень фр. 2-5 мм, 25кг',
          price: 1231,
          quantity: 12,
          name: 'Мраморный щебень',
          total: 1231,
        },
        {
          id: 3,
          isShow: true,
          title: 3,
          nameOne: 'Мраморный щебень фр. 2-5 мм, 25кг',
          price: 1231,
          quantity: 1,
          name: null,
          total: 1231,
        },
        {
          id: 4,
          isShow: true,
          title: 4,
          nameOne: 'Мраморный щебень фр. 2-5 мм, 25кг',
          price: 1231,
          quantity: 12,
          name: 'Мраморный щебень',
          total: 1231,
        },
      ],
    };
  },
  methods: {
    addRow(): void {
      const currentLastChild = this.dataTable[this.dataTable.length - 1];
      console.log('currentLastChild', currentLastChild);

      const newRow = {
        id: currentLastChild.id + 1,
        isShow: true,
        title: currentLastChild.id + 1,
        nameOne: '',
        price: '' as unknown as number,
        quantity: '' as unknown as number,
        name: '',
        total: '' as unknown as number,
      };

      this.dataTable.push(newRow);
    },
    removeRow(index: number) {
      this.dataTable.splice(index, 1);
    },
  },
});
