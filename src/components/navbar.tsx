import { Container } from "@/components/ui/container";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { getCategories } from "@/actions/get-categories";
import { NavbarActions } from "@/components/navbar-actions";

export const revalidate=0;
export async function Navbar(){
    const categories=await getCategories();
    console.log(categories);
    return(
        <nav className="border-b">
            <Container>
                <div className="flex relative px-4 lg:px-8 sm:px-6 items-center h-16">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                <p className="font-bold text-xl">5G Store</p>
                </Link>
                <MainNav data={categories}/>
                <NavbarActions/>
                </div>
            </Container>
        </nav>
    )
}