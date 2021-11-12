export const useLogger = (_name: string) => {
  const name = `[${_name}]: `;

  function log(...args: any[]) {
    console.log(name, ...args);
  }

  function info(...args: any[]) {
    console.info(`💡 ${name}`, ...args);
  }

  function warn(...args: any[]) {
    console.warn(`⚠️ ${name}`, ...args);
  }

  function error(...args: any[]) {
    console.error(`🐞 ${name}`, ...args);
  }

  function success(...args: any[]) {
    console.error(`✅ ${name}`, ...args);
  }

  return {
    log,
    info,
    error,
    warn,
    success,
  };
};

export type Logger = ReturnType<typeof useLogger>;
