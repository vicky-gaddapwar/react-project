import { useNavigate } from "react-router-dom";
import User from "./user";
import { useEffect, useState } from "react";
import { getUser } from "../api/user";


export default function FirstPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {   
        document.title = 'User List';
        const fetchUsers = async () => {
            try {
                const data = await getUser();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">User List</h1>
                <User/>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-indigo-600 text-white">
                                <th className="px-6 py-4 text-center text-sm font-semibold border border-indigo-700">ID</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold border border-indigo-700">Name</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold border border-indigo-700">Email</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold border border-indigo-700">Phone</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold border border-indigo-700">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 text-sm text-gray-700 border border-gray-200">{user.id}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 border border-gray-200">{user.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 border border-gray-200">{user.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 border border-gray-200">{user.phone}</td>
                                        <td className="px-6 py-4 text-sm text-indigo-600 border border-gray-200">{user.username}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500 border border-gray-200">
                                        Loading users...
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                <button 
                    onClick={() => navigate('/display')}
                    className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                >
                    Back
                </button>
            </div>
        </div>
    );
}
