import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";




const Navbar = async () => {

  const categories = await getCategories()

  return (
    <div className="border-b">
        <Container>
            <div className="relative flex px-4 sm:px-6 lg:px-8 h-16 items-center gap-2">
                <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2 " >
                    <p className="font-bold text-xl">Store</p>
                </Link>
                <MainNav
                  data={categories}
                />
                <NavbarActions />
            </div>
        </Container>
    </div>

  )
}

export default Navbar;