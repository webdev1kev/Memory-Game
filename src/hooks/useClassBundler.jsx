const useClassBundler = (classes, classArr) => {
  return classArr.map((className) => classes[className]).join(" ");
};

export default useClassBundler;
