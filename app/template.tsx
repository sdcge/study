export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen Root-template">
            <h2>我是 Root-Template</h2>
            {children}  {/* 此处插入：app\page.tsx　的内容 */}
        </div>
    )
}