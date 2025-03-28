#include<iostream>
#include<vector>
#include<algorithm>
#include<limits>
#include<math.h>
using namespace std;
bool divide(vector<int>arr){
    //int maxi = INT_MIN;
    int prefix =0;
    int total_sum=0;
    int n=arr.size();
    for(int i=0;i<n;i++)
        total_sum +=arr[i];
        for(int i=0;i<n;i++){
            prefix+=arr[i];
            int ans = total_sum - prefix;
            if(ans==prefix)
            return 1;
        }
    
    return 0;
}
int main(){
    int n;
    cout<<"Enter the size of array : ";
    cin>>n;
    vector<int>v(n);
    cout<<" Enter the elements of array : ";
    for(int i=0;i<n;i++)
    cin>>v[i];
    cout<<divide(v);
}
