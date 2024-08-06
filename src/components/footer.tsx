export function Footer(){
    return(
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="text-xs text-black text-center">
                    &copy; {new Date().getFullYear()} Store. All rights reserved
                </p>
            </div>
        </footer>
    )
}