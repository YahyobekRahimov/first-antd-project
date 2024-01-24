export default function Container({ children }) {
   return (
      <div className="container max-w-[1440px] mx-auto px-20">
         {children}
      </div>
   );
}
