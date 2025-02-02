import i18n from "i18next";
import Backend from "i18next-http-backend";
import DetectorDeLinguagem from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend).use(DetectorDeLinguagem).use(initReactI18next).init({ returnObjects: true, fallbackLng: "en", debug: true });

export default i18n;
