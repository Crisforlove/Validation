"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RangeCheckGame from "@/components/teacher-demos/range-check-game"
import LengthCheckGame from "@/components/teacher-demos/length-check-game"
import TypeCheckGame from "@/components/teacher-demos/type-check-game"
import FormatCheckGame from "@/components/teacher-demos/format-check-game"
import CheckDigitGame from "@/components/teacher-demos/check-digit-game"
import DoubleEntryGame from "@/components/teacher-demos/double-entry-game"
import ScreenCheckGame from "@/components/teacher-demos/screen-check-game"

export default function InteractiveGames() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">数据侦探学院：数据验证互动游戏</h1>

      <Tabs defaultValue="range" className="w-full">
        <TabsList className="grid grid-cols-7 mb-8">
          <TabsTrigger value="range">范围检查</TabsTrigger>
          <TabsTrigger value="length">长度检查</TabsTrigger>
          <TabsTrigger value="type">类型检查</TabsTrigger>
          <TabsTrigger value="format">格式检查</TabsTrigger>
          <TabsTrigger value="checkdigit">校验位</TabsTrigger>
          <TabsTrigger value="doubleentry">双重输入</TabsTrigger>
          <TabsTrigger value="screen">屏幕检查</TabsTrigger>
        </TabsList>

        <TabsContent value="range">
          <Card>
            <CardHeader>
              <CardTitle>范围检查挑战</CardTitle>
              <CardDescription>
                测试你对不同数据类型有效范围的理解。在这个游戏中，你需要判断给定值是否在有效范围内。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RangeCheckGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="length">
          <Card>
            <CardHeader>
              <CardTitle>长度检查挑战</CardTitle>
              <CardDescription>
                创建符合长度要求的输入。在这个游戏中，你需要输入符合特定长度限制的数据。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LengthCheckGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="type">
          <Card>
            <CardHeader>
              <CardTitle>类型检查挑战</CardTitle>
              <CardDescription>识别不同值的数据类型。在这个游戏中，你需要判断给定值属于哪种数据类型。</CardDescription>
            </CardHeader>
            <CardContent>
              <TypeCheckGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="format">
          <Card>
            <CardHeader>
              <CardTitle>格式检查挑战</CardTitle>
              <CardDescription>
                输入符合特定格式的数据。在这个游戏中，你需要确保输入符合特定的格式要求。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormatCheckGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checkdigit">
          <Card>
            <CardHeader>
              <CardTitle>校验位挑战</CardTitle>
              <CardDescription>验证包含校验位的编号。在这个游戏中，你需要判断给定的编号是否有效。</CardDescription>
            </CardHeader>
            <CardContent>
              <CheckDigitGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="doubleentry">
          <Card>
            <CardHeader>
              <CardTitle>双重输入挑战</CardTitle>
              <CardDescription>
                两次输入相同信息进行验证。在这个游戏中，你需要确保两次输入的内容完全一致。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DoubleEntryGame />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="screen">
          <Card>
            <CardHeader>
              <CardTitle>屏幕检查挑战</CardTitle>
              <CardDescription>
                根据条件筛选符合要求的数据。在这个游戏中，你需要选择所有符合特定条件的数据项。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScreenCheckGame />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

