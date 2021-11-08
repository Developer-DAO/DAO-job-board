export const useLogger = (_name: string) => {
  const name = `[${_name}]: `;

  function v(...args: any[]) {
    console.log(name, ...args);
  }

  function i(...args: any[]) {
    console.info(`💡 ${name}`, ...args);
  }

  function w(...args: any[]) {
    console.warn(`⚠️ ${name}`, ...args);
  }

  function e(...args: any[]) {
    console.error(`🐞 ${name}`, ...args);
  }

  function s(...args: any[]) {
    console.error(`✅ ${name}`, ...args);
  }

  return {
    v,
    i,
    e,
    w,
    s,
  };
};

export type Logger = ReturnType<typeof useLogger>;
