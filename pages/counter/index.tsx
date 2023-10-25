import { COUNTER_ACTION_TYPES } from "@/store/counter/action-types";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((rootReducer: any) => rootReducer.counterReducer);

  const handleIncrementar = () => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT});

  const handleDecrementar = () => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT});

  return (
    <>
      <Head>
          <meta name="description" content="Counter page content description" />
          <title>Counter page</title>
      </Head>
      <Link href="/">Home Page</Link>
      <div className="p-3">
        <h2>Counter <FontAwesomeIcon icon={faCoffee} /> {counter}</h2>

        <button className="btn btn-sm btn-success" onClick={handleIncrementar}>+ Incrementar</button>
        { ' ' }
        <button className="btn btn-sm btn-danger" onClick={handleDecrementar}>- Decrementar</button>
      </div>
    </>
  );
}

export default Counter;
