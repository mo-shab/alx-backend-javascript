
import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
  firstName: 'Monir',
  lastName: 'El grand',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
