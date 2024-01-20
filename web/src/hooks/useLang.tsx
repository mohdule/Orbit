import { useTranslation } from "react-i18next";


const useLang = (): any => {
    const {t} = useTranslation();
    return (contentPath: string, obj?: any) => {
    }
}

export default useLang;
