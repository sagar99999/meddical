import Image from "next/image"
import { Calendar, User, Eye, Heart, MoveRight, MoveLeft } from "lucide-react"
import Link from "next/link"

export default function RecentPostBlog() {
    return (
        <div className="grow">
            <div className="mb-10">
                <div className="relative w-full h-130 mb-6">
                    <Image className="absolute shadow-xl object-cover object-center" src="/images/img-6.jpg" alt="doctor image" fill />
                </div>
                <p className="tracking-wide text-lg group-hover:underline leading-7 mb-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis modi dolorem accusamus eligendi, impedit pariatur magni? Nesciunt reprehenderit animi quasi quam ducimus. Delectus quidem magnam eligendi facilis iusto ad nulla saepe animi nisi quos ipsum obcaecati commodi, mollitia facere repudiandae minus eius atque vitae quia quae, quam rerum. Blanditiis mollitia repellendus veniam tenetur ipsa sint dolores assumenda dolor iste temporibus? Hic, deserunt reiciendis! Voluptas unde quos mollitia placeat optio tenetur tempora similique corrupti! Ullam ab, praesentium animi eaque sapiente voluptatem quo dolor repudiandae quibusdam eveniet rem deserunt dolores, deleniti voluptates doloribus quos sequi at iusto ea amet. Quae voluptatum, voluptatem laboriosam nihil ipsum alias quisquam temporibus architecto nulla dolor doloribus laborum mollitia, iure repellat porro quibusdam nesciunt hic reiciendis, maxime ratione. Voluptatem porro nihil nemo sint quod aut non. Adipisci consectetur veritatis incidunt assumenda perferendis necessitatibus iusto vero vel, ratione, distinctio, repellat molestias ipsam rem. Voluptatibus laboriosam, dolor libero quo neque numquam. Voluptatum libero perferendis, laudantium, ut aliquid minima ipsam rem repudiandae architecto eligendi, repellat earum quo impedit! Ipsa eligendi laborum quos similique asperiores at earum quo nisi tenetur. Porro error unde recusandae ipsam sequi, iusto totam. Vel ab repellendus fuga facere? Quasi, facere consectetur! Amet voluptate et, cum ut nostrum delectus natus in qui alias repellendus. Fugiat temporibus nihil accusantium ipsum, nesciunt dolore et nemo ut est laboriosam cupiditate, illum molestiae voluptate illo, delectus cumque. Ducimus quod dolorem deleniti numquam hic veniam aut obcaecati maiores blanditiis modi eius officia velit, odit ullam assumenda tenetur! Placeat ratione, et modi porro at dignissimos. Odit laborum optio dolorem quibusdam nemo itaque fugit culpa eligendi pariatur possimus mollitia aperiam tempora illo, delectus debitis vitae rerum molestiae iste deserunt corporis eum modi maiores a minima. In odio cumque obcaecati laudantium totam? Doloremque minus inventore magnam vitae sequi sit voluptatum, non a odio voluptate quasi!
                </p>
            </div>
            <div className="flex justify-between items-center">
                <Link href="/news/one" className="bg-brand-2 mr-3 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">
                    <MoveLeft className="size-5 text-brand-1" />
                    Previous Article</Link>

                <Link href="/news/one" className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">
                    Next Article
                    <MoveRight className="size-5 text-brand-1" />
                </Link>
            </div>
        </div>
    )
}
