import { useState } from "react";

export const useRefresh = () => {
  const [refresh, setRefresh] = useState(0);

  const update = () => {
    setRefresh((prev) => prev + 1);
  };
  return {
    refresh,
    update,
  };
};
