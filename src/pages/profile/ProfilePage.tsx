import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import axiosInstance from "@/config/axios-config";
import ErrorHandling from "@/error/ErrorHandling";

// تعريف نوع بيانات المستخدم
interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

// تعريف مخطط التحقق من صحة البيانات باستخدام Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "your name must be at least 2 characters" }),
  email: z.string().email({ message: "please enter a valid email" }),
});

type FormValues = z.infer<typeof formSchema>;

const UserProfile: React.FC = () => {
  const token = localStorage.getItem("userToken");
  console.log(token);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // محاكاة جلب البيانات من API
  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

      } catch (error) {
        console.error("فشل في جلب بيانات المستخدم:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [setValue, token]);

  const onSubmit = (data: FormValues): void => {
    console.log("تم تحديث البيانات:", data);
    // هنا سيتم إرسال البيانات إلى API
    setIsEditing(false);

    // تحديث واجهة المستخدم (في التطبيق الحقيقي، سيتم ذلك بعد استجابة API)
    if (userData) {
      setUserData({ ...userData, ...data });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 max-w-4xl flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading</p>
        </div>
      </div>
    );
  }

  if (!userData) return <div className="container mx-auto p-6 max-w-4xl"><ErrorHandling /></div>

  // استخراج الأحرف الأولى من الاسم لاستخدامها في AvatarFallback
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">الملف الشخصي</h1>
        <Button
          variant={isEditing ? "secondary" : "default"}
          onClick={() => setIsEditing(!isEditing)}
          type="button"
        >
          {isEditing ? "إلغاء التعديل" : "تعديل الملف الشخصي"}
        </Button>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">الحساب</TabsTrigger>
          <TabsTrigger value="orders">الطلبات</TabsTrigger>
          <TabsTrigger value="security">الأمان</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>معلومات الحساب</CardTitle>
              <CardDescription>
                إدارة معلومات حسابك وتحديث تفاصيل الاتصال الخاصة بك.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" alt={userData.name} />
                  <AvatarFallback className="text-lg">
                    {getInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <Label
                    htmlFor="avatar"
                    className={`${buttonVariants({
                      variant: "secondary",
                      size: "sm",
                    })}`}
                  >
                    تغيير الصورة
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    JPG, GIF or PNG. Max size 2MB.
                  </p>
                </div>
                <div>
                  <input
                    id="avatar"
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>

              <Separator />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      disabled={!isEditing}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      disabled={!isEditing}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">نوع الحساب</Label>
                  <div>
                    <Badge variant="outline" className="text-sm">
                      {userData.role === "user" ? "مستخدم" : userData.role}
                    </Badge>
                  </div>
                </div>

                {isEditing && <Button type="submit">حفظ التغييرات</Button>}
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>طلباتك</CardTitle>
              <CardDescription>
                عرض سجل الطلبات وتتبع الشحنات الحديثة.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>لا توجد طلبات حديثة</p>
                <Button variant="outline" className="mt-4" type="button">
                  تسوق الآن
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>الأمان</CardTitle>
              <CardDescription>
                تحديث كلمة المرور وإدارة تفضيلات الأمان.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">المصادقة الثنائية</Label>
                  <p className="text-sm text-muted-foreground">
                    إضافة طبقة أمان إضافية إلى حسابك.
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">الإشعارات البريدية</Label>
                  <p className="text-sm text-muted-foreground">
                    تلقي رسائل بريد إلكتروني حول حسابك وأنشطتك.
                  </p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>

              <Separator />

              <Button variant="outline" type="button">
                تغيير كلمة المرور
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
