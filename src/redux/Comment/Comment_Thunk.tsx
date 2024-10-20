export function getBudgetSettings() {
    return async (dispatch) => {
      try {
        const res = await axios.get(`http://localhost:3000/budgetSettings`);
        dispatch(fetchBudgetSettings(res.data));
      } catch (error) {
        console.log(error);
      }
    };
  }