import React, { useEffect, useState } from "react";
import "./styles.css";
import Page from "./components/Page";
import PageViewer from "./components/PageViewer";
import {} = from '../'

export default function App() {
  const [pg1, setPg1] = useState(false);
  const [pg2, setPg2] = useState(false);
  const [pg3, setPg3] = useState(false);
  const [pg4, setPg4] = useState(false);
  const [pg5, setPg5] = useState(false);

  return (
    <div className="App">
      <PageViewer>
        <Page
          color="blue"
          initial={}
          variant={}
          animate={}
          setChangePage={setPg1}
          changePage={pg1}
        >
          Page1
        </Page>
        <Page setChangePage={setPg2} changePage={pg2} color="red">
          Page2
        </Page>
        <Page setChangePage={setPg3} changePage={pg3} color="green">
          Page3
        </Page>
        <Page setChangePage={setPg4} changePage={pg4} color="orange">
          Page4
        </Page>
      </PageViewer>
    </div>
  );
}
