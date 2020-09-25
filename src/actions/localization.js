export const CHANGE_LANG = "CHANGE_LANG";

export const changeLang = (lang) => (dispatch) => {
    
    dispatch({
        type: CHANGE_LANG,
        payload: lang
    });
};
