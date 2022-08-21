interface PageViewerProps {
  children: React.ReactNode;
}

const PageViewer = ({ children }: PageViewerProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
};

export default PageViewer;
