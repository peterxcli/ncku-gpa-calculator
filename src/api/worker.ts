// This function saves data to a key-value store.
export const saveData = async (data: string) => {
    let resp = await fetchApi<string>("https://kv.peterxcli.workers.dev",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        }
    );
    return resp;
}

// This function loads data from a key-value store.
export const loadData = async (key: string) => {
    let resp = await fetchApi<string>(`https://kv.peterxcli.workers.dev/${key}`);
    return resp;
}

export interface ApiResponse<T> {
        success: boolean;
        data?: T;
        error?: string;
        code?: number;
    }

    export async function fetchApi<T>(
        url: string,
        options?: RequestInit
    ): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const data = await response.json();
                return {
                    success: false,
                    error: data.message || response.statusText,
                    code: response.status,
                };
            }

            const data = await response.json();
            return {
                success: true,
                data,
                code: response.status,
            };
        } catch (error) {
            return {
                success: false,
                error: (error instanceof Error ? error.message : "Something went wrong"),
            };
        }
    }
