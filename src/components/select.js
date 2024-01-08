export const customTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  minHeight: "fit-content",
});

export const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: () => ({
    height: "auto",
    maxHeight: "34px",
    paddingBootom: "10px",
    width: "31px",
    border: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    width: "100%",
    minHeight: "fit-content",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "auto",
    minHeight: "fit-content",
  }),
  menu: () => ({
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 444,
    // border: "1px solid #C2C5CB",
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }), //- resolve problem with zindex of options
};
