import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import Form from '../../Form/Form';
import Table from '../../Table/Table';
import Arrows from '../../Arrows/Arrows';

export default function AppContent() {
  const appState = useContext(AppContext)[0];

  if (appState.loading) {
    return <Loader />
  }

  return (
    <>
      <Form />
       { appState.error ? <Error message={appState.error ? appState.error : "Что-то пошло не так, попробуйте перезагрузить страницу"}  /> :
       <>
          <Table />
          <Arrows />
        </>
      }
    </>
  )
}
