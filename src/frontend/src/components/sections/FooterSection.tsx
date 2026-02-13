export default function FooterSection() {
  return (
    <footer className="py-8 px-4 bg-secondary border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-foreground">
          © {new Date().getFullYear()} AWS Innovator's Summit | Academic World School
        </p>
      </div>
    </footer>
  );
}
