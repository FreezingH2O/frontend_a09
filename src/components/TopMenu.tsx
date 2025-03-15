import Image from "next/image";
import styles from './topMenu.module.css'
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"; 
import Link from "next/link";

export default async function TopMenu(){

const session = await getServerSession(authOptions)

    return (
        <div className={styles.topMenu}>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <Image className={styles.logo}
                src = '/img/logo.png'
                alt = "logo"
                width= {0}
                height = {0}
                sizes="100vh"
            />
{
    session? <Link href='/api/auth/signout?callbackUrl=/'>
                <div className="flex items-center absolute left-0 top-0 h-full  pl-8 ">
                    Sign-Out of {session.user?.name}
                </div>
            </Link>
            :<Link href='/api/auth/signin'>
                <div className="flex items-center absolute left-0 top-0 h-full pl-8 ">
                    Sign-In
                </div>
            </Link>
}

        </div>
    );
}