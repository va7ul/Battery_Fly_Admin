import { ListItem } from './ListItem/ListItem';

export const AssortmentList = () => {
  return (
    <ul>
      <ListItem
        page="/admin/assortment/batteries-18650"
        title="Акумулятори 18650"
      />
      <ListItem
        page="/admin/assortment/batteries-21700"
        title="Акумулятори 21700"
      />
      <ListItem
        page="/admin/assortment/batteries-32650"
        title="Акумулятори 32650"
      />
      <ListItem
        page="/admin/assortment/batteries-li-po"
        title="Акумулятори Li-po"
      />
      <ListItem
        page="/admin/assortment/batteries-lifepo4"
        title="Акумулятори Lifepo4"
      />
      <ListItem page="/admin/assortment/assembly" title="Готові батареї" />
      <ListItem
        page="/admin/assortment/batteries-for-fpv"
        title="Батареї для FPV-дронів"
      />
      <ListItem
        page="/admin/assortment/batteries-for-transport"
        title="Батареї для електротранспорту"
      />
      <ListItem
        page="/admin/assortment/batteries-for-toys"
        title="Батареї для іграшок"
      />
      <ListItem page="/admin/assortment/devices" title="Прилади" />
      <ListItem page="/admin/assortment/materials" title="Розхідні матеріали" />
    </ul>
  );
};
