import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Search,
  Code,
  Palette,
  FileText,
  TrendingUp,
  Users,
  MessageSquare,
  Briefcase,
  ChevronRight,
} from "lucide-react"

export default function NworkLanding() {
  const categories = [
    {
      title: "Разработка и IT",
      image: "/programming-code-laptop.jpg",
      icon: Code,
    },
    {
      title: "Дизайн",
      image: "/design-colors-palette.jpg",
      icon: Palette,
    },
    {
      title: "SEO и трафик",
      image: "/seo-marketing-analytics.jpg",
      icon: TrendingUp,
    },
    {
      title: "Соцсети и маркетинг",
      image: "/social-media-marketing.png",
      icon: Users,
    },
    {
      title: "Тексты и переводы",
      image: "/writing-translation-text.jpg",
      icon: FileText,
    },
    {
      title: "Аудио, видео, съемка",
      image: "/video-audio-camera.jpg",
      icon: MessageSquare,
    },
    {
      title: "Бизнес и жизнь",
      image: "/business-life-consulting.jpg",
      icon: Briefcase,
    },
  ]

  const stats = [
    { number: "648 400", label: "Активных кворков" },
    { number: "9 681", label: "Новых кворков за неделю" },
    { number: "2 109", label: "Новых проектов за неделю" },
  ]

  const howItWorks = [
    {
      title: "Выберите услугу",
      description: "В магазине Nwork представлен большой выбор услуг от профессионалов.",
      icon: Search,
    },
    {
      title: "Оплатите",
      description: "Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.",
      icon: Users,
    },
    {
      title: "Получите результат",
      description: "100% гарантия возврата средств в случае невыполнения заказа.",
      icon: Briefcase,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="font-bold text-2xl">
                  <span className="text-foreground">N</span>
                  <span className="text-green-600">WORK</span>
                </div>
                <span className="text-xs text-muted-foreground hidden md:block">Фриланс маркетплейс</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Найти услуги" className="pl-10 pr-4" />
              </div>
              <Button className="ml-2 bg-green-600 hover:bg-green-700">Найти</Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost">Вход</Button>
              <Button className="bg-green-600 hover:bg-green-700">Регистрация</Button>
              <Button variant="outline">Фрилансеру</Button>
            </div>
          </div>

          {/* Categories Navigation */}
          <nav className="hidden lg:flex items-center gap-6 py-3 text-sm overflow-x-auto">
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Дизайн
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Разработка и IT
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Тексты и переводы
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              SEO и трафик
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Соцсети и маркетинг
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Аудио, видео, съемка
            </Link>
            <Link href="#" className="hover:text-green-600 whitespace-nowrap">
              Бизнес и жизнь
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Покупайте фриланс-услуги
                <br />
                <span className="text-green-600">в один клик</span>
              </h1>

              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Создать сайт на Wix" className="pl-10 h-12 text-base" />
                </div>
                <Button className="h-12 px-8 bg-green-600 hover:bg-green-700">Найти</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Популярное:</span>
                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                  Веб дизайн
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                  Логотипы
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                  Дизайн соцсетей
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                  Wordpress
                </Button>
              </div>
            </div>

            <div className="relative">
              <img src="/professional-freelancer-workspace.jpg" alt="Евгений, Диктор" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="container mx-auto px-4 mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
            {["Beeline", "IKEA", "Apple", "TELE2", "VK", "Открытие", "DNS"].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Выберите рубрику</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">{category.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold mb-2">NWORK</div>
              <p className="text-sm text-muted-foreground">Фриланс-платформа №1</p>
            </div>

            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как решать задачи на Nwork</h2>
            <p className="text-xl text-muted-foreground">Идеально подходит для бизнеса и для себя</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step, idx) => (
              <Card key={idx} className="p-8 text-center relative">
                {idx < howItWorks.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 text-green-600/30" />
                )}

                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <step.icon className="h-10 w-10 text-green-600" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">Присоединяйтесь к тысячам довольных клиентов</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Зарегистрироваться
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-2xl text-white mb-4">
                <span>N</span>
                <span className="text-green-600">WORK</span>
              </div>
              <p className="text-sm">Фриланс-маркетплейс нового поколения</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">О платформе</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Как это работает
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Блог
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Помощь
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Безопасность
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Форум
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    События
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    VK
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Nwork. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
