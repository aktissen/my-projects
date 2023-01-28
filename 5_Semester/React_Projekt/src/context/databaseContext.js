// https://medium.com/nerd-for-tech/get-global-variables-in-react-js-490cf68f2a73
import React, { createContext, useState, useEffect } from "react";
import { get, set, clear } from "idb-keyval";
export const DatabaseContext = createContext();

const DatabaseContextProvider = (props) => {
  //clear();
  const [userInfo, setUserInfo] = useState([
    {
      id: 0,
      name: "Ann-Kathrin",
      animals: [
        {
          id: 0,
          name: "Dietrich",
          age: 6,
          img: "assets/Dietrich.jpg",
          illnesses: ["Keuchhusten", "Diabetes"],
          bills: [
            {
              id: 0,
              title: "Tierarzt am 30.03.21",
              amount: "345€",
              imageBill: "assets/Rechnung.jpg",
            },
            {
              id: 1,
              title: "Tierarzt am 20.01.21",
              amount: "67€",
              imageBill: "assets/Rechnung.jpg",
            },
          ],
          notes: [
            {
              id: 0,
              title: "Social Walk",
              date: "31.05.2022",
              test: "Didi war heute sehr entspannt beim Social Walk und wollte keine anderen Hunde fressen. Er hat sogar einen neuen Freund gefunden!",
            },
            {
              id: 1,
              title: "Physiotherapie letzte Woche",
              date: "30.05.2022",
              test: "Didi war sehr nett heute, aber leider zeigen sich immer mehr gesundheitliche Baustellen.",
            },
          ],
          examinations: [
            {
              id: 0,
              title: "Vorsorgeuntersuchung Physio",
              date: "30.05.2022",
              place: "Happy Moving Darmstadt",
              comment:
                "Untersuchung der Atemwege, Knochenstabilität, Augen- und Ohrenbereich, Lauftempo. Keine Impfungen oder Röntgenaufnahmen. Keine Auffälligkeiten.",
            },
            {
              id: 1,
              title: "Röntgen Wirbelsäule",
              date: "10.05.2022",
              place: "Tierklinik Hofheim",
              comment: "War gut!",
            },
          ],
        },
        {
          id: 1,
          name: "Edgar",
          age: 9,
          img: "assets/Edgar.jpg",
          illnesses: ["Zahnstein", "Blasensteine"],
          bills: [
            {
              id: 0,
              title: "Tierarzt am 10.03.21",
              amount: "178€",
              imageBill: "bills/124745.jpg",
            },
            {
              id: 1,
              title: "Tierarzt am 23.01.21",
              amount: "14€",
              imageBill: "bills/123s456.jpg",
            },
          ],
          notes: [
            {
              id: 0,
              title: "Verschwunden",
              test: "Edgar war mal wieder für mehrere Tage verschwunden, Ich bin so froh, dass er wieder da ist.",
            },
            {
              id: 1,
              title: "Abszess",
              test: "Edgar hat sich wohl wieder mit einem anderen Kater gestritten, er hatte eine riesige Beule an der Wange! ZUm Glück konnte die schnell versorgt werden.",
            },
          ],
          examinations: [
            {
              id: 0,
              title: "Wurmkur",
              date: "04.03.2022",
              place: "Tierärztin Eva Hanstein",
            },
            {
              id: 1,
              title: "Kastration",
              date: "10.07.2022",
              place: "Tierklinik Hofheim",
            },
          ],
        },
        {
          id: 2,
          name: "Charlie",
          age: 2,
          img: "assets/Charlie.jpg",
          illnesses: ["ADHS"],
          bills: [
            {
              id: 0,
              title: "Tierarzt am 13.08.21",
              amount: "20€",
              imageBill: "bills/12489.jpg",
            },
            {
              id: 1,
              title: "Tierarzt am 20.01.21",
              amount: "56€",
              imageBill: "bills/123456.jpg",
            },
          ],
          notes: [
            {
              id: 0,
              title: "Angekommen",
              test: "Heute hat Charlie sich das erste Mal getraut, sich mit aufs Sofa zu legen!",
            },
            {
              id: 1,
              title: "Charlie und Dietrich",
              test: "Die zwei nähern ich immer mehr an! Heute wurden in friedlicher Zweitracht Leckerlis gegessen.",
            },
          ],
          examinations: [
            {
              id: 0,
              title: "Blutentnahme geriatrisches Profil",
              date: "08.03.2022",
              place: "unsere Tierärztin",
            },
          ],
        },
      ],
      vet: [
        {
          name: "Ursula Veiser",
          adress: "Langgasse 75",
          plz: "64409 Messel",
          tel: "06159-913008",
          web: "keine Angabe",
        },
      ],
    },
  ]);

  // initiate the database
  get("Users")
    .then((val) => {
      if (val === undefined) {
        set("Users", userInfo)
          .then(() => console.log("got first db!"))
          .catch((err) => console.log("It failed!", err));
      }
    })
    .catch((err) => console.log("It failed!", err));

  // get database and set user Info to database content
  useEffect(() => {
    get("Users").then((val) => {
      if (val) setUserInfo(val);
    });
  }, []);

  function updateStateDatabase(newValue) {
    set("Users", userInfo)
      .then(() => console.log("updated db"))
      .catch((err) => console.log("update failed!", err));

    get("Users").then((val) => {
      console.log(val);
    });
  }

  return (
    <DatabaseContext.Provider
      value={{
        userInfo,
        updateStateDatabase,
      }}
    >
      {props.children}
    </DatabaseContext.Provider>
  );
};
export default DatabaseContextProvider;
