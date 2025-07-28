import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">MapiLab</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Support</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                Microsoft Outlook Add-in
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Outlook Duplicate Remover
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Найдите и удалите дубликаты писем, контактов, задач и элементов календаря в Microsoft Outlook. 
                Освободите место и организуйте свой почтовый ящик за считанные минуты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать бесплатно
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={20} className="text-blue-600" />
                      <span className="font-semibold">Microsoft Outlook</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Активно</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-sm">Найдено дубликатов: 247</span>
                      <Icon name="AlertTriangle" size={16} className="text-red-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm">Очищено: 195 писем</span>
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Почему выбирают наш инструмент?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мощные функции для полной очистки и организации вашего Outlook
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Умный поиск дубликатов</CardTitle>
                <CardDescription>
                  Находит точные и похожие дубликаты по различным критериям: тема, отправитель, содержание
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-green-600" />
                </div>
                <CardTitle>Быстрая обработка</CardTitle>
                <CardDescription>
                  Обрабатывает тысячи писем за минуты с высокой скоростью и точностью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Безопасное удаление</CardTitle>
                <CardDescription>
                  Создает резервные копии перед удалением и позволяет восстановить данные
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-orange-600" />
                </div>
                <CardTitle>Гибкие настройки</CardTitle>
                <CardDescription>
                  Настраиваемые фильтры и критерии поиска для точного контроля процесса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-red-600" />
                </div>
                <CardTitle>Детальные отчеты</CardTitle>
                <CardDescription>
                  Подробная статистика найденных и удаленных дубликатов с возможностью экспорта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-teal-600" />
                </div>
                <CardTitle>Поддержка всех типов</CardTitle>
                <CardDescription>
                  Работает с письмами, контактами, задачами, встречами и заметками
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Системные требования
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Monitor" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Операционная система</h3>
                    <p className="text-slate-600">Windows 10, 11 (32-bit и 64-bit)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Mail" size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Microsoft Outlook</h3>
                    <p className="text-slate-600">Outlook 2016, 2019, 2021, Microsoft 365</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <Icon name="HardDrive" size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Требования к системе</h3>
                    <p className="text-slate-600">50 МБ свободного места, 1 ГБ RAM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Начните использовать сегодня</CardTitle>
                <CardDescription className="text-blue-100">
                  Бесплатная пробная версия на 30 дней
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      $29.95
                    </div>
                    <p className="text-slate-600">Одноразовая покупка</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-slate-600">Пожизненная лицензия</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-slate-600">Бесплатные обновления</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-slate-600">Техническая поддержка</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-slate-600">30-дневная гарантия возврата</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать пробную версию
                  </Button>
                  
                  <p className="text-sm text-slate-500 text-center">
                    Кредитная карта не требуется
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">MapiLab</span>
              </div>
              <p className="text-slate-400">
                Профессиональные инструменты для Microsoft Outlook
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукты</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Duplicate Remover</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Mail Utilities</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Security Tools</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Документация</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">О нас</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Блог</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Партнеры</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 MapiLab. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;