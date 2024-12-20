// Enhance accessibility
export const AccessibleButton = ({ onClick, children, ariaLabel, ...props }) => (
  <Button
    onClick={onClick}
    aria-label={ariaLabel}
    role="button"
    tabIndex={0}
    {...props}
  >
    {children}
  </Button>
); 