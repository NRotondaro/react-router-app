import { useParams } from 'react-router-dom';
import { getInvoice } from '../data/data';

export default function Bills() {
  let params = useParams();
  let invoice = getInvoice(Number(params.invoiceId));
  return (
    <main className='flex flex-col py-5 border my-4 w-1/3 mx-auto'>
      {invoice ? (
        <div>
          <h2>Total due: {invoice.amount}</h2>
          <p>
            {invoice.name} : {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
        </div>
      ) : null}
    </main>
  );
}
