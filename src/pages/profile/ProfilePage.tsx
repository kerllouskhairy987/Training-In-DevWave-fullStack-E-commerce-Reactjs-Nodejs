import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import axiosInstance from "@/config/axios-config";
import SpinnerComponent from "@/components/ui/Spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

interface UserData {
    _id: string;
    email: string;
    role: string;
}

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const UserProfile: React.FC = () => {
    const token = localStorage.getItem("userToken");
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    // Fetch user data from API
    useEffect(() => {
        const fetchUserData = async (): Promise<void> => {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get(`/api/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.data) {
                    setUserData(res.data.data);
                    setValue("email", res.data.data.email);
                    setSelectedImage(res.data.data.image);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [setValue]);

    const onSubmit = (data: FormValues) => {
        // const formData = new FormData();
        // formData.append("email", data.email as string);

        setIsEditing(true);
        axiosInstance
            .put(`/api/users/profile`, {email: data.email}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Failed to update user data:", error);
            })
            .finally(() => {
                setIsEditing(false);
            });
    };

    if (isLoading) {
        return (
            <div className="container mx-auto p-6 max-w-4xl flex justify-center items-center h-64">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p>Loading profile data...</p>
                </div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="container mx-auto p-6 max-w-4xl text-center">
                <p className="text-destructive">Failed to load user data</p>
                <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">User Profile</h1>
                <Button
                    variant={isEditing ? "secondary" : "default"}
                    onClick={() => setIsEditing(!isEditing)}
                    type="button"
                >
                    {isEditing ? "Cancel Editing" : "Edit Profile"}
                </Button>
            </div>

            <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="orders">Orders</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>
                                Manage your account information and update your contact details.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage
                                        src={
                                            selectedImage ? URL.createObjectURL(selectedImage) : "  "
                                        }
                                        alt={"user image"}
                                    />
                                </Avatar>
                                <div className="space-y-1">
                                    <Label
                                        htmlFor="avatar"
                                        className={`${buttonVariants({
                                            variant: "secondary",
                                            size: "sm",
                                        })}`}
                                    >
                                        Change Image
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                        JPG, GIF or PNG. Max size 2MB.
                                    </p>
                                </div>
                            </div>

                            <Separator />

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
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
                                    <Label htmlFor="role">Account Type</Label>
                                    <div>
                                        <Badge variant="outline" className="text-sm">
                                            {userData.role === "user" ? "User" : userData.role}
                                        </Badge>
                                    </div>
                                </div>

                                {isEditing && (
                                    <Button variant="outline" disabled={isLoading} type="submit">
                                        {isLoading ? <SpinnerComponent /> : "Save Changes"}{" "}
                                    </Button>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="orders">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Orders</CardTitle>
                            <CardDescription>
                                View your order history and track recent shipments.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-8 text-muted-foreground">
                                <p>No recent orders</p>
                                <Button variant="outline" className="mt-4" type="button">
                                    Shop Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security</CardTitle>
                            <CardDescription>
                                Update your password and manage security preferences.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Add an extra layer of security to your account.
                                    </p>
                                </div>
                                <Switch id="two-factor" />
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="notifications">Email Notifications</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Receive emails about your account and activities.
                                    </p>
                                </div>
                                <Switch id="notifications" defaultChecked />
                            </div>

                            <Separator />

                            <Button variant="outline" type="button">
                                Change Password
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default UserProfile;